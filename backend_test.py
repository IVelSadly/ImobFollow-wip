import requests
import sys
import json
from datetime import datetime

class ImobFollowAPITester:
    def __init__(self, base_url="https://realestate-ai-167.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name, success, details=""):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
        
        result = {
            "test": name,
            "success": success,
            "details": details,
            "timestamp": datetime.now().isoformat()
        }
        self.test_results.append(result)
        
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} - {name}")
        if details:
            print(f"    Details: {details}")

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}" if not endpoint.startswith('http') else endpoint
        
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=headers, timeout=10)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers, timeout=10)

            success = response.status_code == expected_status
            
            if success:
                try:
                    response_data = response.json()
                    details = f"Status: {response.status_code}, Response: {json.dumps(response_data, indent=2)}"
                except:
                    details = f"Status: {response.status_code}, Response: {response.text[:200]}"
            else:
                details = f"Expected {expected_status}, got {response.status_code}. Response: {response.text[:200]}"

            self.log_test(name, success, details)
            return success, response.json() if success and response.text else {}

        except requests.exceptions.RequestException as e:
            self.log_test(name, False, f"Request failed: {str(e)}")
            return False, {}
        except Exception as e:
            self.log_test(name, False, f"Unexpected error: {str(e)}")
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test("API Root", "GET", "", 200)

    def test_waitlist_post_valid_email(self):
        """Test waitlist signup with valid email"""
        test_email = f"test_{datetime.now().strftime('%H%M%S')}@example.com"
        return self.run_test(
            "Waitlist - Valid Email",
            "POST",
            "waitlist",
            200,
            data={"email": test_email}
        )

    def test_waitlist_post_duplicate_email(self):
        """Test waitlist signup with duplicate email"""
        test_email = "duplicate@example.com"
        # First signup
        self.run_test(
            "Waitlist - First Signup",
            "POST", 
            "waitlist",
            200,
            data={"email": test_email}
        )
        # Duplicate signup
        return self.run_test(
            "Waitlist - Duplicate Email",
            "POST",
            "waitlist", 
            200,
            data={"email": test_email}
        )

    def test_waitlist_post_invalid_email(self):
        """Test waitlist signup with invalid email"""
        return self.run_test(
            "Waitlist - Invalid Email",
            "POST",
            "waitlist",
            422,
            data={"email": "invalid-email"}
        )

    def test_waitlist_get_count(self):
        """Test getting waitlist count"""
        return self.run_test("Waitlist Count", "GET", "waitlist/count", 200)

    def test_status_endpoints(self):
        """Test status check endpoints"""
        # Test POST status
        success1, response = self.run_test(
            "Status Check - Create",
            "POST",
            "status",
            200,
            data={"client_name": "test_client"}
        )
        
        # Test GET status
        success2, _ = self.run_test("Status Check - Get All", "GET", "status", 200)
        
        return success1 and success2

    def run_all_tests(self):
        """Run all API tests"""
        print("🚀 Starting ImobFollow API Tests...")
        print(f"📍 Testing against: {self.api_url}")
        print("=" * 60)

        # Test API availability
        self.test_api_root()
        
        # Test waitlist functionality
        self.test_waitlist_post_valid_email()
        self.test_waitlist_post_duplicate_email()
        self.test_waitlist_post_invalid_email()
        self.test_waitlist_get_count()
        
        # Test status endpoints
        self.test_status_endpoints()

        # Print summary
        print("\n" + "=" * 60)
        print(f"📊 Test Summary: {self.tests_passed}/{self.tests_run} tests passed")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All tests passed!")
            return 0
        else:
            print("⚠️  Some tests failed. Check details above.")
            return 1

def main():
    tester = ImobFollowAPITester()
    return tester.run_all_tests()

if __name__ == "__main__":
    sys.exit(main())
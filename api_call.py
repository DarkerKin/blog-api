import requests

url = "http://localhost:3000/api/blogs/300"  # ✅ matches your Express route
data = {}

response = requests.delete(url)

print("Status:", response.status_code)

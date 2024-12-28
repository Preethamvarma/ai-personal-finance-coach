from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample user data
user_data = {
    "name": "John Doe",
    "income": 5000,
    "expenses": {
        "rent": 1200,
        "utilities": 300,
        "groceries": 400,
        "entertainment": 200
    }
}

# API to get user data
@app.route('/api/user', methods=['GET'])
def get_user_data():
    return jsonify(user_data)

# API to calculate savings
@app.route('/api/calculate_savings', methods=['GET'])
def calculate_savings():
    total_expenses = sum(user_data['expenses'].values())
    savings = user_data['income'] - total_expenses
    return jsonify({"savings": savings})

if __name__ == "__main__":
    app.run(debug=True)
 

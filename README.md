# React + Vite

# Hosting Link - https://expressengine-mxg5.vercel.app/

# How To Run
1. Download Zip file
2. Unzip it and Go to Project Directory
3. npm install
4. npm run dev - The app will start at localhost:5173
5. Sign Up and Login to use our expression engine 


# Objective
Create a web-based Expression Engine UI using Bootstrap and React. The UI allows users to define rules and expressions using a form.

# Features
Dynamic Rule Creation: Easily add, delete, and modify rules with a variety of rule types and operators.
Combinator Selection: Choose between 'AND' and 'OR' as the combinator for combining multiple rules.
Validation: Form validation ensures that all fields are filled before submitting the form.
Result Display: After submitting the form, the expression result is displayed in a well-formatted JSON format.

# How to Use

1. First of login yourself ,if not logged in then sign up and log in 

2. Rule Type:
Select the type of rule (e.g., Age, Credit Score, Account Balance) from the dropdown.
The available rule types are: 'age', 'creditScore', and 'accountBalance'.

3. Operator:
 Choose a comparison operator (e.g., '>', '<=', '=') for the selected rule type.
The available operators depend on the chosen rule type.

4. Value:
 Enter the desired value for the rule.

5. Score:
 Enter the corresponding score for the rule. This could be a numerical value representing the weight or importance of the rule.

6. Combinator:
Select either 'AND' or 'OR' from the combinator dropdown to determine how multiple rules are combined.

7. Adding and Deleting Rules:
Click on the "Add Rule" button to add a new rule.
Use the "Delete" button next to each rule to remove it.

8. Submitting the Form:
Click on the "Submit" button to see the result. The expression result will be displayed in a well-formatted JSON format.

<!DOCTYPE html>
<html>
<head>
  <title>JS Form with Output</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f0f4ff;
      padding: 20px;
    }
    .form-container {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      width: 300px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    label {
      display: block;
      margin-top: 10px;
    }
    input {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    button {
      margin-top: 15px;
      width: 100%;
      padding: 10px;
      background: #4a6cf7;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .output {
      margin-top: 20px;
      padding: 15px;
      background: #e9f5ff;
      border-radius: 8px;
    }
  </style>
</head>
<body>

  <h2>Student Registration Form</h2>
  
  <div class="form-container">
    <label for="name">Full Name:</label>
    <input type="text" id="name">

    <label for="email">Email:</label>
    <input type="email" id="email">

    <label for="age">Age:</label>
    <input type="number" id="age">

    <button onclick="showOutput()">Submit</button>
  </div>

  <div class="output" id="output"></div>

  <script>
    function showOutput() {
      // Get values
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let age = document.getElementById("age").value;

      // Check if all fields are filled
      if(name === "" || email === "" || age === ""){
        alert("Please fill all fields!");
        return;
      }

      // Show the filled output
      document.getElementById("output").innerHTML = `
        <h3>Form Submitted!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
      `;
    }
  </script>

</body>
</html>

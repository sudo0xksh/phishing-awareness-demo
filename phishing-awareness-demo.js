<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phishing Awareness Demo</title>
</head>
<body>
    <h1 id="myH1">Welcome</h1><br><br>

    <form>
        Username: <input type="text" id="user"><br><br>
        Password: <input type="password" id="pass"><br><br>
        <button type="submit" id="submit">Submit</button>
    </form>

<script>
    const user = document.getElementById("user");
    const pass = document.getElementById("pass");
    const submit = document.getElementById("submit");

    submit.addEventListener("click", function (event) {
        event.preventDefault();

        document.getElementById("myH1").textContent =
            `Hello, ${user.value}`;

        console.warn("⚠️ Phishing Awareness Demo");
        console.warn("User entered credentials:");
        console.warn("Username:", user.value);
        console.warn("Password:", pass.value);
        console.warn("In real phishing attacks, this data is secretly sent to attackers.");

        alert("This is a demo. Never enter real credentials on untrusted pages!");
    });
</script>

</body>
</html>

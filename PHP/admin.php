<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Admin</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <?php
    echo '<form action="form_handler.php" method="POST">
        <fieldset>
            
            <label for="newDate">Enter event date</label>
            <input type="date" name="date" id="newDate">
            
            <label for="newHeader">Enter event header</label>
            <input type="text" name="header" id="newHeader">
            
            <label for="newDesc">Enter event description</label>
            <textarea name="desc" id="newDesc"></textarea>
            
            <input type="submit" value="Submit">
        </fieldset>
    </form>';
    
    ?>

</body>

</html>
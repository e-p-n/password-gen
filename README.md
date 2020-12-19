# Password Generator
## Steps taken
1. Created assets folder with js and css subfolders and moved the css and js files into them. Updated the HTML to reflect those changes
2. Commented out javascript related to the form in order to concentrate on building the code to generate number
3. Determined that a prompt dialogue box would be the best way to ask the user how long the password would be and confirm dialogue boxes would work for finding out what types of characters to include.
4. Create a prompt dialogue that asks the user for a number and assigns the response to a variable called passwordLength.
5. Create a confirm dialogue for each character option that asks the user to press 'OK' if they want to use that character type or 'Cancel' if they do not. It assigns a boolean value of true if they choose okay or false if they choose cancel to the apropriate variable (lc, uc, num or sc).
6. If the variables are true, their characters are added to the characters variable (Eg. if lc is true then all lowercase letters are added to the characters variable.)
7. Using a for loop that runs while it is less than the value of the passwordLength variable add random characters to the finalPassword variable.
8. Return the variable.
9. Add error checking.
    1. Add if statement and do...while loop to section that generates the passwordLength variable that checks if the users response was a number between 8 and 128. If not it calls an alert dialogue that warns the user the entry was invalid and asks them to try again. It then redeploys the prompt.
    2. Add if statement and do...while loop to section that checks what type of characters the user wants to use and makes sure they have selected at least one. If not it calls an alert dialogue that warns the user and asks them to try again. It then redeploys all of the confirm dialogues.
    3. Add if statement and do...while loop to the password generation section to make sure that the finalPassword variable has at least 1 of each type of chosen character. If not it resets the value of the variable to "" and generates a new password.
10. Removed commenting out of code for form and tested the page.
11. Updated CSS so that the generate password buttton's width would stretch to 100% if viewed on a phone or other smaller device.

## Screenshot
![](./assets/images/screenshot.jpg)

## Link to webpage



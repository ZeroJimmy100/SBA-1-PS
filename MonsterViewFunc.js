document.getElementById("myBtn").addEventListener("click", myFunction);
function myFunction()
{
    
    for (var i = 0; i < sessionStorage.length; i++){
        let string;
        let myTitle;
        if(sessionStorage.key(i) == "image")
        {
            const dataImage = sessionStorage.getItem("image");
            if(dataImage)
            {
                document.querySelector("#imgPreview").setAttribute("src", dataImage);
            }
        }
        else
        {
            myTitle = sessionStorage.key(i);
            string = sessionStorage.getItem(sessionStorage.key(i));
        }

        if(string == "" || string == undefined)
        {
            continue;
        }
        else
        {
            if(myTitle == "monsterName")
            {
                myTitle = "Monster's Name";
            }
            else if(myTitle == "monsterFavColor")
            {
                myTitle = "Monster's Favorite Color";
            }
            else if(myTitle == "monsterLikes")
            {
                myTitle = "Monster's Likes";
            }
            else if(myTitle == "monsterDislikes")
            {
                myTitle = "Monster's Dislikes";
            }

            if(myTitle == "Monster's Name")
            {
                document.getElementById("MonsterName").innerHTML += "<h4>" + myTitle + ": " + string + " " + "</h4>";
            }
            else
            {
                document.getElementById("MonsterInfo").innerHTML += "<p>" + myTitle + ": " + string + " " + "</p>";
            }
        }
    }
}

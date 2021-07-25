function saveData()
{
    let canCreate = false;
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(document.questionaireMonster2.image.value == "" || document.questionaireMonster2.image.value == null || document.questionaireMonster2.image.value == -1)
    {
        alert("Please upload an image of your monster");
        return false;
    }
    else if(format.test(document.questionaireMonster2.monsterName.value))
    {
        alert("Please enter a proper name for your monster");
        return false;
    }
    else if(document.questionaireMonster2.monsterName.value == "")
    {
        alert("Please enter a name for your monster");
        document.questionaireMonster2.monsterName.focus();
        return false;
    }
    else if(document.questionaireMonster2.gender.value == "")
    {
        alert("Please pick a gender for your monster");
        return false;
    }
    
    canCreate = true;


    if(canCreate != false)
    {
        sessionStorage.setItem('monsterName', document.questionaireMonster2.monsterName.value);

        sessionStorage.setItem('monsterLikes', document.questionaireMonster2.monsterLikes.value);

        sessionStorage.setItem('monsterDislikes', document.questionaireMonster2.monsterDislikes.value);

        sessionStorage.setItem('monsterFavColor', document.questionaireMonster2.monsterFavColor.value);
        
        sessionStorage.setItem('gender', document.questionaireMonster2.gender.value);
        alert("Successfully created a monster!");
    }
}

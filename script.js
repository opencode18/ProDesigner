var projects = document.querySelectorAll(".projects li");
var pen = document.querySelectorAll(".project-links p");
var links = document.querySelectorAll(".links");

function select()
{
    this.classList.add("selected");
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    for(var j = 0; j < projects.length; j++)
    {
        if(projects[j] != this)
        {
            projects[j].classList.remove("selected");
            links[j].style.display = "none";
        }
        else
        {
            links[j].style.display = "block";
        }
    }
}



for(var i = 0; i < projects.length; i++)
{
    projects[i].addEventListener("click", select);
}

for(var k = 0; k < pen.length; k++)
{
    pen[k].setAttribute("data-height", "400");
    pen[k].setAttribute("data-default-tab", "result");
}



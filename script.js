projects = document.querySelectorAll(".projects li");
pen = document.querySelectorAll(".project-links p");
links = document.querySelectorAll(".links")
var select;



for(var i = 0; i < projects.length; i++)
{
    select = i;
    projects[i].addEventListener("click", function()
    {
        this.classList.add("selected");
        // window.scrollTo(0, 0);
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        for(var j = 0; j < projects.length; j++)
        {
            if(projects[j] != this)
            {
                projects[j].classList.remove("selected");
                links[j].style.display = "none";
            }
            else
                links[j].style.display = "block";
        }
    });
}

for(var i = 0; i < pen.length; i++)
{
    pen[i].setAttribute("data-height", "400");
    pen[i].setAttribute("data-default-tab", "result");
}


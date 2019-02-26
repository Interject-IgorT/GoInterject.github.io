    

$(document).ready(function(){    
    /* 
    Expands and collapses sections for streamlining documentation upon clicking the expand/collapse event button.
    */
    var collapse = document.getElementsByClassName("collapsible");
    
    var i;

    for (i = 0; i < collapse.length; i++) {
        collapse[i].addEventListener("click", function() {
            // toggle between adding and removing active so color changes when hovering over button.
            this.classList.toggle("clicked");
            
            // Toggle between hiding and showing text in the panel div
            var panel = this.parentNode;
            while (panel) {
                if (panel.classList.contains('panel') ) {
                    // if panel is open, close. else open to max height
                    if (panel.style.maxHeight){
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                    // Once panel is found and acted on, break loop.
                    break;
                }
                // go to next sibling and restart loop
                panel = panel.nextElementSibling;
            }
            //console.log('hello')
        });
    }
});
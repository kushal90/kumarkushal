let sliders = Array.from(document.getElementsByClassName("slider"));

sliders.forEach(element => {
    element.oninput = () => {
        // let suffix = "";
        // let image = document.getElementById("image-to-show");
        // if (element.id !== "blur")
        //     suffix += "%";
        // else
        //     suffix += "px";
        // if (element.id !== "transparency")
        //     image.setAttribute("style", `filter: ${element.id}(${element.value*10}` + `${suffix})`);
        // else
        //     image.setAttribute("style", `filter: opacity(${element.value*10}` + `${suffix})`);

        let image = document.getElementById("image-to-show");
        // let imageHeight = image.naturalHeight;
        // let imageWidth = image.naturalWidth;
        // let ratio_WtoH = imageWidth/imageHeight;
        // let image_container = Array.from(document.getElementsByClassName("image_container"));
        // let setWidth = window.getComputedStyle(image_container[0]).getPropertyValue(`width`);
        // image_container[0].setAttribute("style", `height: ${setWidth/ratio_WtoH}%`);
        // image.setAttribute("style", `height: ${setWidth/ratio_WtoH}%`);
        let filter = "filter:";
        let grayscale_filter = ` grayscale(${sliders[0].value*10}%)`;
        let blur_filter = ` blur(${sliders[1].value*10}px)`;
        let sepia_filter = ` sepia(${sliders[2].value*10}%)`;
        let transparency_filter = ` opacity(${100 - sliders[3].value*10}%)`;
        let filter_string = filter+grayscale_filter+blur_filter+sepia_filter+transparency_filter;
        image.setAttribute("style", filter_string);


    }
});

let w = window.innerWidth;
let h = window.innerHeight;
let main_window = document.getElementById("html");
console.log(main_window);


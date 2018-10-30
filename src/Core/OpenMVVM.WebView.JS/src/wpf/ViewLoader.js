class ViewLoader {
    loadView(viewName, callback) {
        var xhr = new window.ActiveXObject("Msxml2.XMLHTTP");
        xhr.open("GET", "Views/" + viewName + ".html", true);

        xhr.onreadystatechange = function () {

            if (xhr.readyState !== 4) return null;

            var div = document.createElement("div");
            div.innerHTML = xhr.responseText;
            var element = div.getElementsByTagName("div")[0];

            callback(element);
            return null;
        };

        xhr.send();
    }
}

export const viewLoader = new ViewLoader();
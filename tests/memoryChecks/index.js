BABYLONDEVTOOLS.Loader.require('../validation/validation.js')
.load(function() {
    document.getElementById("run").addEventListener("click", function() {
        // Loading tests
        var xhr = new XMLHttpRequest();

        xhr.open("GET", "../validation/config.json", true);

        xhr.addEventListener("load", function () {
            if (xhr.status === 200) {

                config = JSON.parse(xhr.responseText);

                // Run tests
                var index = 0;

                var title = document.getElementById("sceneName").value.toLowerCase();
                for (var index = 0; index < config.tests.length; index++) {
                    if (config.tests[index].title.toLowerCase() === title) {
                        break;
                    }
                }

                runTest(index, function() {
                    BABYLON.Engine.LastCreatedEngine.dispose();
                });
            }
        }, false);

        xhr.send();
    });
});
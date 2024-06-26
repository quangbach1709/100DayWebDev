$(document).ready(function () {
        $.getJSON("../assetes/json/data-epy.json", function (data) {
            data.forEach((item) => {
                $("#list-epy").append(
                    `
                    <li>
                        <div class="row">
                            <div class="col"><input type="checkbox"></div>
                            <p class="col">${item.name}</p>
                            <p class="col">${item.email}</p>
                            <p class="col">${item.address}</p>
                            <p class="col">${item.phone}</p>
                            <div class="col d-flex">
                            <i class="bi bi-pencil-fill"></i>
                            <i class="bi bi-trash-fill"></i>
                            </div>
                        </div>
                    </li>
                    `
                )
            })
        })
        $("#launchButton").click(function () {
            $("#modelId").modal('show');
        });

    }
)
let count = localStorage.getItem("reviewCount");

        if (!count) {
            count = 1;
        } else {
            count = parseInt(count) + 1;
        }

        localStorage.setItem("reviewCount", count);

        document.getElementById("reviewCount").textContent = count;
function open_letter() {
    document.getElementsByClassName("letter-close")[0].style.display = 'none'
    document.getElementsByClassName("letter-open")[0].style.display = 'block'
}

// Import the data to customize and insert them into page

const resolveFetch = () => {
    return new Promise((resolve, reject) => {
        fetchData();
        resolve("Fetch done!");
    });
};

resolveFetch();
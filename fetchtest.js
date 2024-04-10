const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

const fetchRhodeIslandData = async () => {
    const response = await fetch('http://localhost:3333/measure/area?area=32', {
        headers,
    });
    const data = await response.json();
    console.log(data);
    return data;
}

fetchRhodeIslandData();

module.exports = {
    fetchRhodeIslandData,
};
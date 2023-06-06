const link = 'http://api.weatherstack.com/current?access_key=3ec035a6c71364180f51f129f7014668&query=Moscow'

const fetchData = async () => {
    const result =  await fetch(link)
    const data = await result.json();

    return data
}

fetchData()



const fetchFonk = () =>{
    const url = 'http://www.course-api.com/react-tours-project'
    // console.log(fetch(url))

    // fetch(url)
    //     .then((Response) => Response.json()).then((data)=>console.log(data))
    //     .catch((err)=>console.log(err))

    const getTours = async () => {
        try {
            const resp = await fetch(url)
            const data = await resp.json()
            // console.log(data);
            return data
        } catch(error) {
            console.log(error);
        }
    }
    const veri= getTours().then()
    console.log(veri);
    return (
        <div>
            Deneme
        </div>
    )
}
export default fetchFonk

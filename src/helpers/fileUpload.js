

export const fileUpload = async( file ) => {
    
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dbpqef3uo/upload'
                        // https://api.cloudinary.com/v1_1/dbpqef3uo/upload

    const formData = new FormData()
    formData.append('upload_preset', 'react-journal')
    formData.append('file', file)

    console.log(formData);

    try {
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        })

        if ( resp.ok ){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (error) {
         throw error;
        
    }
}
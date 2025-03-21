
const DynamicProductPage = async({params, searchParams}) => {
    const res = await params.productId;

    console.log(await searchParams);
    
    return (
        <div>
            <h1 className='text-4xl text-center'>Dynamic Product Page {res}</h1>
        </div>
    );
};

export default DynamicProductPage;
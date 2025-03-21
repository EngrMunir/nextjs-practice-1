
const DynamicProductPage = async({params}) => {
    const res = await params;
    console.log(res);
    return (
        <div>
            <h1 className='text-4xl text-center'>Dynamic Product Page</h1>
        </div>
    );
};

export default DynamicProductPage;
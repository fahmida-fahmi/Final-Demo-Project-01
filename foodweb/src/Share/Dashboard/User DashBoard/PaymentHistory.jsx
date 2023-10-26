import usePayments from "../../../pages/Hooks/usePayments/usePayments";

const PaymentHistory = () => {

    const [payments] = usePayments()


    return (
        <div>
            <div className='w-2/3 mx-auto bg-white py-16 px-8 text-black font-bold'>
                <div className='cinzel uppercase text-2xl grid grid-cols-3 mb-10'>
                    <h1>Total Payments: {payments.length}</h1>
                </div>
                <div className="overflow-x-auto rounded-t-lg">
                    <table className="table">
                        {/* head */}
                        <thead className='border-b-0 uppercase'>
                            <tr className='text-xl text-white bg-[#D1A054]'>
                                {/* <th >#</th> */}
                                <th className='font-normal'>Email</th>
                                <th className='font-normal'>Transaction Id</th>
                                <th className='font-normal'>total price</th>
                                <th className='font-normal'>payment date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                payments.map((row, index) => <tr
                                    key={row._id}
                                >
                                    {/* <td>{index + 1}</td> */}
                                    <td>{row.email}</td>
                                    <td>{row.transactionId}</td>
                                    <td>${row.price}</td>
                                    <td>{row.date }</td>
                                    
                                </tr>
                                )
                            }


                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;
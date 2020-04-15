import React from 'react';
import Header from '../../components/Header/Header';
import styles from './PaymentHistory.module.sass'
import Footer from '../../components/Footer/Footer';

const PaymentHistory = () => {
    return (
        <>
            <Header/>
            <div className={styles.container}>
                <table>
                    <thead>
                    <tr>
                        <th colSpan={4}>MY TRANSACTIONS</th>
                    </tr>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Data
                        </th>
                        <th>
                            Amount
                        </th>
                        <th>
                            Balance
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>01.01.20</td>
                        <td>+100</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>02.02.20</td>
                        <td>+150</td>
                        <td>250</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>03.03.20</td>
                        <td>-50</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>04.04.20</td>
                        <td>-25</td>
                        <td>175</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>05.05.20</td>
                        <td>+200</td>
                        <td>375</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <Footer/>
        </>
    );
};

export default PaymentHistory;
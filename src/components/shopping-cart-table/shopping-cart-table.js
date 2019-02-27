import React from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';
import { bookDeletedFromCart } from '../../actions';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

    const rederRow = ({ id, title, count, total }, idx) => {
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button className="btn btn-outline-primary btn-sm"
                            onClick={() => onDecrease(id)}
                    >
                        <i className="fa fa-minus-circle"/>
                    </button>
                    <button className="btn btn-outline-success btn-sm"
                            onClick={() => onIncrease(id)}
                    >
                        <i className="fa fa-plus-circle"/>
                    </button>
                    <button className="btn btn-outline-danger btn-sm"
                            onClick={() => onDelete(id)}
                    >
                        <i className="fa fa-trash-o"/>
                    </button>
                </td>
            </tr>
        )
    };

    return (
        <div className="shopping-cart-table">
            <h2>Ваш заказ</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Наименование</th>
                        <th>Кол-во</th>
                        <th>Цена</th>
                        <th>Действие</th>
                    </tr>
                </thead>

                <tbody>
                {items.map(rederRow)}
                    {/*<tr>
                        <td>2</td>
                        <td>Realease IT</td>
                        <td>1</td>
                        <td>24,99</td>
                        <td>
                            <button className="btn btn-outline-primary btn-sm">
                                <i className="fa fa-minus-circle"/>
                            </button>
                            <button className="btn btn-outline-success btn-sm">
                                <i className="fa fa-plus-circle"/>
                            </button>
                            <button className="btn btn-outline-danger btn-sm">
                                <i className="fa fa-trash-o"/>
                            </button>
                        </td>
                    </tr>*/}
                </tbody>
            </table>

            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
    return {
        items: cartItems,
        total: orderTotal
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => console.log(`Increase`, id),
        onDecrease: (id) => console.log(`Decrease`, id),
        onDelete: (id) => dispatch(bookDeletedFromCart(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
import React, { Component } from 'react';

import styles from './moneyPlanner.module.scss'

class MoneyPlanner extends Component {
  state = {
    income: 123123,
    expense: 123121,
  }

  renderPocketDetailItem = ({ title, value, customClass }) => {
    return (
      <div className={`${styles.pocketDetailItem} ${customClass || ''}`}>
        <div className={styles.title}>{title}</div>
        <div className={styles.value}>{value}</div>
      </div>
    )
  }

  render() {
    const { income, expense } = this.state
    return (
      <div className={styles.container}>
        <div className={styles.myPocket}>
          <div className={styles.header}>Summary</div>
          {this.renderPocketDetailItem({
            title: 'Income',
            value: `THB ${Number(income).toLocaleString()}`,
            customClass: styles.pocket
          })}
          {this.renderPocketDetailItem({
            title: 'Expense',
            value: `THB ${Number(expense).toLocaleString()}`,
            customClass: styles.expense,
          })}
          {this.renderPocketDetailItem({
            title: 'Left',
            value: `THB ${Number(income - expense).toLocaleString()}`,
            customClass: styles.left,
          })}
        </div>
        <div className={styles.expenseBox}>
          <div className={styles.header}>Expense</div>
          <div className={styles.expenseList}>
            <div className={styles.expenseItem}>
              <div className={styles.icon}></div>
              <div className={styles.title}>Test</div>
              <div className={styles.cost}>THB 500</div>
            </div>
            <div className={styles.expenseItem}>
              <div className={styles.icon}></div>
              <div className={styles.title}>Test</div>
              <div className={styles.cost}>THB 500</div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default MoneyPlanner;
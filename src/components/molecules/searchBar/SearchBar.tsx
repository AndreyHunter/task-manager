import React from 'react';

import SearchIcon from '../../../assets/images/svg/search.svg?react';

import styles from './searchBar.module.scss';

export const SearchBar: React.FC = () => {
    return (
        <div className={styles.root}>
            <input type="text" placeholder="Search note..." />
            <SearchIcon />
        </div>
    );
};

export default SearchBar;

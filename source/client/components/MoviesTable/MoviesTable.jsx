import React, { useState, useRef, useEffect } from 'react';
import { Table, Input, Button, Space, Popconfirm } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { MovieModalInfo } from '../MovieModalInfo';

const MoviesTable = ({ movies, getMovies, deleteMovie, showMovieItem, movieItem, hideMovieItem }) => {

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [sortedInfo, setSortedInfo] = useState({});
    const [filteredInfo, setFilteredInfo] = useState({});
    const [visible, setVisible] = useState(false);

    const searchInput = useRef();

    useEffect(() => {
        console.log('render');
        getMovies();
    },[]);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    }

    const handleChange = (pagination, filters, sorter) => {
        setSortedInfo(sorter);
        setFilteredInfo(filters);
    }

    const handleReset = clearFilters => {
        clearFilters();
        setSearchText('');
    }

    const handleShowInfo = (hash) => {
        showMovieItem(hash);
        setVisible(true);
    }

    const handleHideInfo = () => {
        hideMovieItem();
        setVisible(false);
    }

    const handleDelete = (hash) => {
        deleteMovie(hash);
    };

    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type='primary'
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size='small'
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size='small' style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),

        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => searchInput.current.select(), 100);
            }
        },
        render: text =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns = [
        {
            title: '#',
            dataIndex: 'idx',
            width: '50px',
            render: (text, record, index) => movies.length >= 1 ? index + 1 : null,
        },
        {
            title: 'Name',
            dataIndex: 'title',
            width: '30%',
            sorter: (a, b) => a.title.localeCompare(b.title),
            sortDirections: ['ascend', 'descend', 'ascend'],
            ...getColumnSearchProps('title'),
            render: (text, record) => movies.length >= 1 ? (
                <a onClick={() => handleShowInfo(record.hash)}>
                    { record.title }
                </a>
            ) : null,
        },
        {
            title: 'Release Year',
            dataIndex: 'release',
            width: '130px',
        },
        {
            title: 'Format',
            dataIndex: 'format',
            width: '100px',
        },
        {
            title: 'Stars',
            dataIndex: 'stars',
            ...getColumnSearchProps('stars'),
        },
        {
            title: 'Action',
            dataIndex: 'delete',
            width: '120px',
            render: (text, record) => movies.length >= 1 ? (
                <Popconfirm title='Sure to delete?' onConfirm={() => handleDelete(record.hash)}>
                    <Button type='primary' danger>
                        Delete
                    </Button>
                </Popconfirm>
            ) : null,
        },
    ];

    return (
        <>
            <Table
                columns={ columns }
                dataSource={ movies }
                rowKey={ (record) => record.hash }
                defaultPageSize
                bordered
                onChange={ handleChange }
            />
            <MovieModalInfo
                visible={ visible }
                handleHideInfo={ handleHideInfo }
                movieItem={ movieItem }
            />
        </>
    );
};

export default MoviesTable;

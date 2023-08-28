'use client'

import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
    border: 1px solid #ccc;
    padding: 16px;
    margin-bottom: 16px;

    .title {
        font-size: 1.2rem;
        margin-bottom: 8px;
    }

    .description {
        font-size: 1rem;
    }
`;

const Item = ({ title, description }) => (
  <ItemContainer className='p-6 my-4 max-w-sm mx-auto bg-white rounded-xl border-2 shadow-lg items-center space-x-4'>
    <div className='title font-bold'>{title}</div>
    <div className='description font-light text-gray-500 my-2'>{description}</div>
  </ItemContainer>
);

export default Item;


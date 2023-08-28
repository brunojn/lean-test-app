import React from 'react';
import Item from '../components/Item';
import data from '../data/items.json';

const ItemsPage = () => (
  <div>
    <div className='text-2xl font-bold max-w-sm mx-auto p-6 my-4'>
        Lista de Objetos
    </div>

    {data.map((item, index) => (
    <Item key={index} title={item.title} description={item.description} />
    ))}
  </div>
);

export default ItemsPage;

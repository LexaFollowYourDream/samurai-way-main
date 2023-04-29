import React from 'react';
import './index.css';
import {renderTree} from "./renderTree";
import {store} from "./redux/redux-store";



store.subscribe(renderTree)
renderTree();







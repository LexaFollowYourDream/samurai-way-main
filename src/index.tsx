import React from 'react';
import './index.css';
import {renderTree} from "./renderTree";
import store from "./redux/state";


store.subscribe(renderTree)
renderTree();

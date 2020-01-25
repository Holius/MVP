import React, {Component} from 'react';
import SearchModal from './SearchModal';

class Search extends Component {
    constructor(props) {
        super(props);
        this.mainRef = React.createRef();
        this.state = { 
            array: [
            'a','b','bb','c','d'
            ],
            query: '',
            show: false,
        }
        this.myRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    };

    onSearchChange () {
        this.setState({query: event.target.value.toLowerCase()})
      };

      toggleShow () {
        event.preventDefault();
        this.setState({show: !this.state.show})
      };


    handleClick() {
        if (!this.state.show) {
          // attach/remove event handler
          document.addEventListener('click', this.handleOutsideClick, false);
        } else {
          document.removeEventListener('click', this.handleOutsideClick, false);
        }
    
        this.toggleShow.call(this)
      }
      
      handleOutsideClick(e) {
       
        // ignore clicks on the component itself
        if (this.myRef.current.contains(e.target)) {
          return;
        }
        
        this.handleClick();
      }
      
      render() {
          return (
                <div ref={this.myRef}> 
                <input 
                type='text' 
                value={this.state.query}
                onChange={this.onSearchChange.bind(this)}
                onClick={this.handleClick.bind(this)}
            >
            </input> 
            <button onClick={(e) => {
                this.toggleShow();
            }}>Q
            </button>
            <SearchModal
                show={this.state.show}
                query={this.state.query}
              />
          </div>
          );
      }

    }

export default Search;
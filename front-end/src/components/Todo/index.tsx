import MyIcon from '../../assets/icon-cross.svg'
import * as C from './style';

export const Todo = () => {
    return(
        <C.container>
            <div className="containerBody">
                <div className="container">
                    <p>qualquer coisa</p>
                    <button>
                        <img src={MyIcon} alt="X" />
                    </button>
                </div>
                <div className="container">
                    <p>qualquer coisa</p>
                    <button>
                        <img src={MyIcon} alt="X" />
                    </button>
                </div>
            </div>
        </C.container>
    );
}
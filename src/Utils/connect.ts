import Block from "./Block";
import store, {StoreEvents} from "./Store";
import isEqual from "./isEqual";

type Indexed<T = any> = {
    [key in string]: T;
};

function connect(mapStateToProps: (state: Indexed) => Indexed) {
    return function(Component: typeof Block) {
        return class extends Component {
            constructor(props: any) {
                let state = mapStateToProps(store.getState());
  
                super({...props,
                    ...state});
  
                store.on(StoreEvents.Updated, () => {
                    const newState = mapStateToProps(store.getState());
                
                    if (!isEqual(state, newState)) {
                        this.setProps({...newState});
                    }
  
                    state = newState;
                });
            }
        };
    };
}
  
export default connect;

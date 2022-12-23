import { Route, Switch } from "react-router-dom";

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Visual from './components/main/Visual';
import Content from './components/main/Content';

import Community from './components/sub/Community';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Location from './components/sub/Location';
import Members from './components/sub/Members';
import Youtube from './components/sub/Youtube';

import './scss/style.scss';

function App() {
	return (
		<>
		<Switch>
		<Route exact path='/'>
		<Header type={'main'} />
		<Visual />
		<Content />
	</Route>
	<Route>
		<Header type={'sub'} />
	</Route>
	</Switch>

	

	<Route path='/department' component={Department} />

	<Route path='/youtube' component={Youtube} />

	<Route path='/gallery' component={Gallery} />

	<Route path='/community' component={Community} />
		
	<Route path='/location' component={Location} />

	<Route path='/members' component={Members} />
		
	<Footer />		
	</>	
	);
}

export default App;

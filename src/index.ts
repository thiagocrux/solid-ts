import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonPrint from './ShareButtonPrint';
import DOMEventHandler from './DOMEventHandler';

const eventHandler = new DOMEventHandler();

const twitter = new ShareButtonTwitter(
	eventHandler,
	'.btn-twitter',
	'https://youtube.com/rodrigobranas'
);
twitter.bind();

const facebook = new ShareButtonFacebook(
	eventHandler,
	'.btn-facebook',
	'https://youtube.com/rodrigobranas'
);
facebook.bind();

const linkedin = new ShareButtonLinkedin(
	eventHandler,
	'.btn-linkedin',
	'https://youtube.com/rodrigobranas'
);
linkedin.bind();

const print = new ShareButtonPrint(eventHandler, '.btn-print');
print.bind();

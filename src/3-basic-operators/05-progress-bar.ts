import {fromEvent, tap} from "rxjs";
import {map} from "rxjs/operators";


const text = document.createElement('div');
text.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta mauris arcu, id consectetur sapien sollicitudin eu. Suspendisse non nisl tristique, malesuada elit in, venenatis lectus. Morbi molestie tincidunt mi sed luctus. Morbi sed odio eu nisi luctus semper sit amet vitae quam. Sed accumsan tincidunt turpis, placerat rhoncus erat tincidunt sed. Maecenas laoreet egestas risus et vulputate. Curabitur at erat sit amet velit consectetur convallis. Aenean et felis nec nulla commodo efficitur vitae in purus. Praesent turpis augue, hendrerit vel felis non, porta hendrerit felis. Nulla dapibus dolor non eros faucibus elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<br/><br/>
Morbi porttitor tellus eget aliquet imperdiet. Praesent dignissim, elit at suscipit rutrum, mi dui pretium ante, aliquam commodo turpis massa nec felis. Vestibulum at erat enim. Integer ultrices justo vel justo luctus, quis pellentesque velit interdum. Mauris in quam eu dolor dignissim commodo vel non nunc. Praesent non efficitur orci, et pulvinar lorem. Donec euismod malesuada nulla, vel maximus tortor dignissim eget. Nunc odio tortor, tempor et sodales ut, molestie id urna. Duis sapien magna, aliquet sit amet pulvinar quis, lobortis in turpis. Sed faucibus justo ut metus gravida, et suscipit tellus dictum. Vestibulum enim lectus, tincidunt quis commodo a, auctor sed nibh. Etiam luctus massa convallis, viverra sem a, hendrerit lectus. Duis vel risus tempus mi commodo tempus. Fusce convallis turpis vitae purus volutpat vehicula. Etiam viverra augue eget velit vestibulum, in dignissim enim dictum.
<br/><br/>
Phasellus est lectus, aliquet vitae arcu in, venenatis aliquam dui. Praesent feugiat volutpat nibh eu consequat. Donec vulputate consectetur massa viverra molestie. Quisque eros dui, malesuada ac justo rhoncus, suscipit pellentesque odio. Sed dignissim consequat massa, sed tincidunt ligula efficitur non. Etiam facilisis diam nisi, a gravida sapien tincidunt ut. In ultricies mollis odio a finibus. Donec tempor odio ac magna ullamcorper volutpat non at urna. Pellentesque diam orci, pretium vel mi a, euismod venenatis leo. Pellentesque cursus tempus dolor, vel vulputate nulla mollis eget. Vestibulum sit amet placerat nunc, eget volutpat orci. Praesent eu ante nec dui volutpat ultrices. Nullam condimentum lacus sit amet neque semper, vitae fermentum nibh eleifend. Proin imperdiet ac turpis pulvinar placerat.
<br/><br/>
Sed convallis urna molestie enim fermentum, id tincidunt nisi molestie. Nunc non euismod purus. Sed vehicula nisi vel quam volutpat blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce cursus, risus vel tristique vestibulum, nibh ante tempus mi, vel volutpat sem tortor a nunc. Phasellus hendrerit dolor sed ligula ullamcorper sagittis. Nam quis pulvinar urna. Nunc nec elit non quam malesuada facilisis. Sed blandit tortor justo, at tincidunt tellus molestie laoreet. Aenean gravida volutpat augue, elementum venenatis dolor laoreet ut. Nam vitae tellus vel magna mattis tempus. Fusce metus purus, efficitur sed dui ut, sagittis maximus urna. Curabitur scelerisque placerat magna, sed tincidunt nisi vestibulum non. Duis vehicula id dolor eget porttitor.
<br/><br/>
Aenean maximus blandit nisl, quis egestas lorem convallis a. Sed bibendum velit eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ac odio leo. Donec laoreet augue at convallis pulvinar. Vivamus porttitor, metus sit amet vehicula semper, libero velit gravida nunc, sit amet gravida nunc tellus vitae enim. Fusce finibus metus felis, vel dapibus felis gravida vitae. Vestibulum eget feugiat justo, vitae mollis ipsum. Pellentesque non elit dictum leo vehicula vehicula at bibendum neque. Ut eu ullamcorper arcu. Cras gravida ligula a orci elementum egestas sit amet et nulla. Aenean maximus porttitor tortor id laoreet.
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);


const calcProgressBarPercent = (event) => {
    const {scrollTop, scrollHeight, clientHeight} = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100
}

// Stream
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
    map(calcProgressBarPercent),
    tap(console.log)
);

progress$.subscribe(percent => {
    progressBar.style.width = `${percent}%`
});


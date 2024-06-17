import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Comentarios varios</h3>
    <img src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_wide-4a729b43a69f924bb86eb688b8f3bb38ff19be3b.jpg" />

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac sodales ligula. Etiam a lorem velit. Duis vel posuere dui, sit amet semper ante. Donec vel pharetra metus. Donec justo tortor, eleifend non orci non, consectetur gravida odio. Nullam et felis at metus volutpat mattis. Aenean tempus massa eget auctor placerat. Duis leo felis, semper a mauris sit amet, porta semper felis. Cras luctus nulla sit amet tellus sodales consectetur. Sed a ante felis.

      Pellentesque eleifend id orci at rhoncus. Donec erat dui, maximus nec sollicitudin in, consectetur at quam. Quisque vitae lorem tellus. Cras non interdum velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque non nisl eu nisl egestas molestie at sed nibh. Duis tincidunt consequat justo. Duis feugiat ac quam at rutrum. Phasellus id congue libero, et auctor nibh. Nam sit amet nulla sodales, euismod arcu non, aliquam libero. Ut sed urna non risus aliquet rhoncus. Praesent non nibh eget sem mattis semper in quis erat. Morbi sollicitudin condimentum urna, vitae malesuada ex sollicitudin eget. Cras lectus nunc, sollicitudin quis finibus nec, pretium a magna.
      
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque nec scelerisque magna, fermentum tempus metus. Duis dapibus dui porttitor imperdiet condimentum. Vestibulum sagittis pharetra eros eget interdum. Nullam ultrices turpis nec mauris vulputate dapibus. Nunc nec nisi vel erat ultricies tristique vel in magna. Donec interdum ac ligula id euismod. Proin accumsan ligula ac convallis elementum. Quisque sodales sem ut eros lacinia, quis porta mi dignissim. Nam porta sagittis velit, in dapibus tellus fermentum non. Ut maximus, urna id porta vehicula, diam leo gravida turpis, a cursus arcu arcu nec metus.
      
      Nullam vestibulum feugiat dictum. Maecenas sollicitudin quam at nulla viverra, eget aliquam orci tincidunt. Fusce ex justo, semper at auctor pulvinar, gravida quis mi. Nulla magna lacus, facilisis nec aliquam eget, iaculis vitae urna. Fusce interdum semper ex ac aliquam. Praesent tincidunt odio quam, ut ornare enim laoreet quis. Integer vel purus vitae ex ornare maximus. Phasellus porttitor semper sapien non bibendum. Phasellus vehicula venenatis velit, in vehicula elit sollicitudin id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      
      Morbi vel elementum lacus. Curabitur faucibus, odio blandit placerat iaculis, nunc orci tempor diam, quis vehicula odio lorem at risus. Aliquam bibendum iaculis sem in accumsan. Quisque pretium tortor finibus tellus tincidunt dignissim. Curabitur placerat lacinia quam nec malesuada. Ut vitae iaculis augue, eget vulputate risus. Phasellus congue, mi ut porta rhoncus, diam mi porttitor risus, ut tempus est neque vel nibh. Proin libero enim, vestibulum vel blandit at, posuere eget quam. Etiam at lacinia diam. Fusce id gravida orci.
    </p>
  `,
  styles: `
    img {
      width: 100%;
      height: auto;
    }
  `
})
export class CommentsComponent {

}

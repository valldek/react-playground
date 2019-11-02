class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }

    this.handleProductUpVote = this.handleProductUpVote.bind(this);
    this.handleProductDownVote = this.handleProductDownVote.bind(this);
  }

  componentDidMount() {
    this.setState({
      products: Seed.products
    });
  }


  handleProductUpVote(productId) {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    });

    // console.log(`${productId} was upvoted`);
  }
  handleProductDownVote(productId) {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes - 1
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    });

    // console.log(`${productId} was upvoted`);
  }

  render() {
    const products = this.state.products.sort((a, b) => b.votes - a.votes)
    const productComponents = products.map((product) => {
      return (
        <Product
          key = {`product-${product.id}`}
          id = {product.id}
          title = {product.title}
          description = {product.description}
          url = {product.url}
          votes = {product.votes}
          submitterAvatarUrl = {product.submitterAvatarUrl}
          productImageUrl = {product.productImageUrl}
          onUpVote = {this.handleProductUpVote}
          onDownVote = {this.handleProductDownVote}
        />
      )
    });

    return (
      <div className="ui unstackable items">
        {productComponents}
      </div>
    );
  }
}

class Product extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleUpVote = this.handleUpVote.bind(this);
  // }

  // handleUpVote() {
  //   this.props.onVote(this.props.id);
  // }

  handleUpVote = () => {
    this.props.onUpVote(this.props.id);
  }

  handleDownVote = () => {
    this.props.onDownVote(this.props.id)
  }

  render() {
    return (
      <div className="item">
        <div className="image">
          <img src={this.props.productImageUrl} />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a onClick={this.handleUpVote}>
              <i className="large caret up icon" />
            </a>
            <a onClick={this.handleDownVote}>
              <i className="large caret down icon" />
            </a>
            {this.props.votes}
          </div>
          <div className="description">
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>{this.props.description}</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);

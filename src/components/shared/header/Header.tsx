import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import { Component } from 'react';

interface HeaderProps {
  searchElements: (seachValue: string) => void;
  clasName?: string;
}

class Header extends Component<HeaderProps> {
  state = {
    searchValue: '',
  };

  onChange = (value: string) => {
    this.setState({ searchValue: value });
  };

  handlerSearchButton = () => {
    this.props.searchElements(this.state.searchValue);
  };

  render() {
    return (
      <header
        className={`mt-2 flex items-center gap-x-3 ${this.props.clasName}`}
      >
        <Input value={this.state.searchValue} onChage={this.onChange} />
        <Button onClick={this.handlerSearchButton}>Найти</Button>
      </header>
    );
  }
}

export default Header;

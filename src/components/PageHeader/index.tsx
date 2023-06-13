// -> Import da lib extrena de Navegação
import { Link } from 'react-router-dom';

// -> Import da lib externa de Icons
import { ArrowLeft } from '@phosphor-icons/react';

// -> Import do CSS
import { PageHeaderCntainer } from './styles';

// -> Tipandos as props do component
interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <PageHeaderCntainer>
      <Link to='/' className="back">
        <ArrowLeft size={20} color='#5061FC' weight='bold' />
        <span> Voltar </span>
      </Link>

      <h1> {title} </h1>
    </PageHeaderCntainer>
  );
}

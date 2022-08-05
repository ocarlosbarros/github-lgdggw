import { getInvoices } from '../data';
import { Link, Outlet } from 'react-router-dom';
export default function Invoices() {
  const invoices = getInvoices();
  return (
    <section style={{ display: 'flex' }}>
      <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
        {invoices.map((invoice) => (
          <Link
            style={{ display: 'block', margin: '1rem 0' }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </section>
  );
}

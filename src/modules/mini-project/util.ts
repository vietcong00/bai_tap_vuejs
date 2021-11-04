export function formatCurrency(number: number): string {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD',
    }).format(number);
}

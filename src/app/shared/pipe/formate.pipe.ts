import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formate',
  standalone: true,
})
export class FormatePipe implements PipeTransform {
  transform(value: unknown, type: string): string | null {
    if (typeof value !== 'string') return null;

    switch (type) {
      case 'telefone':
        return this.formatPhone(value);
      case 'data':
        return this.formatDate(value);
      default:
        return null;
    }
  }

  private formatPhone(phone: string): string | null {
    const phonePattern = /^(\d{2})(\d{5})(\d{4})$/;
    const match = phone.match(phonePattern);

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    console.log('Não foi possível formatar telefone');
    return null;
  }

  private formatDate(dataString: string): string {
    const data = new Date(dataString);

    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }
}

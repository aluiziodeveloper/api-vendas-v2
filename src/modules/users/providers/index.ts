import { container } from 'tsyringe';
import BcryptHashProvider from './HashProvider/implementations/BcryptHashProvider';
import { IHashProvider } from './HashProvider/models/IHashPovider';

container.registerSingleton<IHashProvider>('HashProvider', BcryptHashProvider);

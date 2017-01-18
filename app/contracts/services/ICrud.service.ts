namespace app{
    'use strict';

    export interface ICrudService{

        add(data): void;
        update(data): void;
        view(): void;
        remove(data): void;
    }
}
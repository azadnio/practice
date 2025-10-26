import { computed, inject } from "@angular/core";
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Service } from "../service/service";

export type TodoItem = {
    id: string;
    title: string;
    completed: boolean;
};

type TodoState = {
    items: TodoItem[];
    loading: boolean;
    error: string | null;
    filter: 'all' | 'completed' | 'pending';
};

const initialState: TodoState = {
    items: [],
    loading: false,
    error: null,
    filter: 'all',
};

export const ToDoStore = signalStore(
    {
        providedIn: 'root',
    },
    withState<TodoState>(initialState),
    withMethods((store, todoService = inject(Service)) => ({

        async loadAll() {

            patchState(store, { loading: true, error: null });
            try {
                const items = await todoService.getMockData();
                patchState(store, { items, loading: false });
            } catch (error) {
                patchState(store, { error: (error as Error).message, loading: false });
            }
        },

        async addTodo(title: string) {
            const newItem: TodoItem = {
                id: '',
                title,
                completed: false,
            };
            patchState(store, { loading: true, error: null });
            try {
                const addedItem = await todoService.addTodo(newItem);
                patchState(store, (state)=>{
                    return { items: [...state.items, addedItem], loading: false };
                });
            } catch (error) {
                patchState(store, { error: (error as Error).message, loading: false });
            }
        },

        async removeTodo(item: TodoItem) {
            patchState(store, { loading: true, error: null });
            try {
                await todoService.removeTodo(item);
                patchState(store, (state) => {
                    return { items: state.items.filter(i => i.id !== item.id), loading: false };
                });
            } catch (error) {
                patchState(store, { error: (error as Error).message, loading: false });
            }
        },

        async toggleCompletion(item: TodoItem) {
            patchState(store, { loading: true, error: null });
            try {
                // const updatedItem = await todoService.updateTodo(item, !item.completed);
                patchState(store, (state) => {
                    return {
                        items: state.items.map(i => i.id === item.id ? { ...i, completed: !i.completed } : i),
                        loading: false
                    };
                });
            } catch (error) {
                patchState(store, { error: (error as Error).message, loading: false });
            }
        },

        updateFilter(filter: 'all' | 'completed' | 'pending') {
            patchState(store, { filter });
        }
    })),
    withComputed((store) =>({
        filteredItems: computed(() => {
            switch (store.filter()) {
                case 'completed':
                    return store.items().filter(item => item.completed);
                case 'pending':
                    return store.items().filter(item => !item.completed);
                default:
                    return store.items();
            }
        })  
    }))
);
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MoviesService {
    create(createMovieDto: CreateMovieDto): string;
    findAll(page: any): any;
    findOne(id: number): string;
    update(id: number, updateMovieDto: UpdateMovieDto): string;
    remove(id: number): string;
}
